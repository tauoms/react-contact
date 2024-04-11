import Header from '../layout/Header';
import Footer from '../layout/Footer';
import AddContact from './AddContact';
import AddRandomContact from './AddRandomContact';
import FavoriteContact from './FavoriteContact';
import RemoveContact from './RemoveContact';
import GeneralContact from './GeneralContact';

const ContactIndex = () => {
  return (
    <>
        <Header title ='React Contact' />
        <div className='grid grid-cols-2'>
            <AddRandomContact />
            <RemoveContact />
        </div>

        <div className='grid grid-cols-1'>
        <AddContact />
        <FavoriteContact />
        <GeneralContact />
        <Footer />
        </div>
    </>
  )
}

export default ContactIndex