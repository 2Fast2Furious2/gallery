import React, { useEffect, useState } from 'react';
import axios from 'axios';
// FIGURE OUT TO LOAD THE DATA FIRST THEN RENDER!!!!
import NavBar from './NavBar.jsx'
import Header from './Header.jsx';
import Images from './Images.jsx'
import Modal from './Modal.jsx';
import ShareModal from './ShareModal.jsx';
import styles from './App.scss';


import Description from './Header/Description.jsx';

export default () => {
  const [isLoading, setLoading] = useState(true);

  const [home, setHome] = useState({}); // works
  const [allImages, setAllImages] = useState([]); // works
  const [superhost, setSuperhost] = useState(''); // works
  const [isModalShowing, setModalShowing] = useState(false); //works
  const [modal, setModal] = useState(styles.hidden);// works


  // const [currentPic, setCurrentPic] = useState(0); NOT USED

  const [isShowingShareModal, setShowingShareModal] = useState(false);
  const [shareModal, setShareModal] = useState(styles.hideShareModal);


   useEffect(() => {
     let id = window.location.pathname.split("/")[2];
     axios.get(`/properties/${id}/images`).then((images) => {
       setAllImages(images.data);
     });
     axios.get(`/properties/${id}`).then((house) => {
       let houseInfo = house.data;
       setSuperhost(houseInfo.superhost);
       setHome(houseInfo);
     });
     const timer = setTimeout(() => {
       setLoading(false);
     }, 1000);
     return () => clearTimeout(timer).catch(console.log);
   }, []);



  let showAllImages = (num) => {
    if (isModalShowing) {
      setModalShowing(false);
      // setCurrentPic(0);
      setModal(styles.hidden);
    } else {
      setModalShowing(true);
      setModal(styles.show);
    }
  };

  let shareHandler = () => {
    if (isShowingShareModal) {
      setShowingShareModal(false);
      setShareModal(styles.hideShareModal);
    } else {
      setShowingShareModal(true);
      setShareModal(styles.showShareModal);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.desc}>
        <Description description={home.description} />
      </div>
      <div className={styles.header}>
        <Header description={home.description} starRating={home.rating} totalReviews={home.reviews} location={home.location} shareHandler={shareHandler} />
      </div>
      <Images images={allImages} showAllImages={showAllImages} />
      <div className={modal}>
        <Modal showAllImages={showAllImages} allImages={allImages} shareHandler={shareHandler}/>
      </div>
      <div className={shareModal}>
        <ShareModal shareHandler={shareHandler} />
      </div>
    </div>
  )
}

//line 110 change home.reviews to home.reviews_count for postgres to work
