import React, { useState,useEffect } from 'react';
import { db } from '../Config/Config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import "../Styles/Verify.css"
export const Verification= () =>{
  useEffect(()=>{
    window.scroll(0,0);
  },[]);
  const [certificateId, setCertificateId] = useState('');
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setCertificateData(null);

    try {
      const certificatesRef = collection(db, 'certificates');
      const q = query(certificatesRef, where('__name__', '==', certificateId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Certificate not found');
      } else {
        setCertificateData(querySnapshot.docs[0].data());
      }
    } catch (err) {
      setError('An error occurred while verifying the certificate');
      console.error(err);
    }
  };

  return (
    <section className='Verify'>
    <div className="container">
      <h1>Verify Your Certificate</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={certificateId}
          onChange={(e) => setCertificateId(e.target.value)}
          placeholder="Enter Certificate ID"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {certificateData && (
        <div className="certificate-info">
          <h2>Certificate Information:</h2>
          <p><strong>Name:</strong> {certificateData.Name}</p>
          <p><strong>Certificate Number:</strong>{certificateData['Certificate Number']}</p>
          <p><strong>Course Name:</strong> {certificateData['Course Name']}</p>
        </div>
      )}
    </div>
    </section>
  );
}
