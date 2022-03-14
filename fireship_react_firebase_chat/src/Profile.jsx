import {useState, useEffect} from 'react'
import {useAuth, upload} from "./firebase"


const Profile = () => {
  const currentUser = useAuth();
  const [photoURL, setPhotoURL] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg");

  useEffect(() => {
    // if (currentUser && currentUser.photoURL) {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL)
    }
  }, [currentUser])
  
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  const handleClick = () => {
    upload(photo, currentUser, setLoading)
  }
  return (
    <div className="profile">
      <input type="file" onChange={handleChange} />
      <button disabled={loading || !photo} onClick={handleClick}>Upload</button>
      <img src={photoURL} alt="avatar" className="avatar" />
    </div>
  )
}

export default Profile