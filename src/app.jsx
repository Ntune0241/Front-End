import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SideBarWrapper } from './components/SideBarWrapper/SideBarWrapper';
import React from 'react'
import { LandingPage } from './screens/LandingPage'
import { TentangKami } from './screens/TentangKami/TentangKami'
import { Layanan } from './screens/Layanan/Layanan'
import { BeritaGuest } from './screens/BeritaGuest/BeritaGuest'
import { BeritaDetailHot } from './screens/BeritaDetailHot/BeritaDetailHot'
import { BeritaDetailLatest } from './screens/BeritaDetailLatest/BeritaDetailLatest'
import { Login } from './screens/Login/Login'
import { SignUp } from './screens/SignUp/SignUp'
import { Home } from "./screens/Home/Home";
import { BeritaUser } from "./screens/BeritaUser/BeritaUser";
import { BeritaDetailHotUser } from "./screens/BeritaDetailHotUser/BeritaDetailHotUser";
import { SetelanProfil } from './screens/SetelanProfil/SetelanProfil'
import { DeteksiUser } from './screens/DeteksiUser/DeteksiUser'
import { HomeAdmin } from "./screens/HomeAdmin/HomeAdmin";
import { SetelanGanti } from "./screens/SetelanGanti/SetelanGanti";
import { SetelanNotifikasi } from "./screens/SetelanNotifikasi/SetelanNotifikasi";
import { JadwalSampahAdmin } from "./screens/JadwalSampahAdmin/JadwalSampahAdmin";
import { DetailInputJadwal } from "./screens/DetailInputJadwal/DetailInputJadwal"; 
import { InputBerita } from "./screens/InputBerita/InputBerita";
import { ListBerita } from "./screens/ListBerita/ListBerita";
import { TagihanAdmin } from "./screens/TagihanAdmin/TagihanAdmin";
import { ChatPengelolaAdmin } from "./screens/ChatPengelolaAdmin/ChatPengelolaAdmin";
import { DeteksiAdmin } from "./screens/DeteksiAdmin/DeteksiAdmin";

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* <SideBarWrapper /> */}
    <Routes>
    <Route path='/' element={<LandingPage/>} />
    <Route path='/tentangkami' element={<TentangKami/>} />
    <Route path='/layanan' element={<Layanan/>} />
    <Route path='/beritaguest' element={<BeritaGuest/>} />
    <Route path='/beritadetailhot' element={<BeritaDetailHot/>} />
    <Route path='/beritadetaillatest' element={<BeritaDetailLatest/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/beritauser' element={<BeritaUser/>} />
    <Route path='/beritadetailuser' element={<BeritaDetailHotUser/>} />
    <Route path='/setelanprofil' element={<SetelanProfil/>} />
    <Route path='/deteksiuser' element={<DeteksiUser/>} />
    <Route path='/homeadmin' element={<HomeAdmin/>} />
    <Route path='/setelanganti' element={<SetelanGanti/>} />
    <Route path='/setelannotifikasi' element={<SetelanNotifikasi/>} />
    <Route path='/jadwalsampahadmin' element={<JadwalSampahAdmin/>} />
    <Route path='/detailinputjadwalsampah' element={<DetailInputJadwal/>} />
    <Route path='/inputberita' element={<InputBerita/>} />
    <Route path='/listberita' element={<ListBerita/>} />
    <Route path='/tagihanadmin' element={<TagihanAdmin/>} />
    <Route path='/chatpengelolaadmin' element={<ChatPengelolaAdmin/>} />
    <Route path='/deteksiadmin' element={<DeteksiAdmin/>} />
    </Routes>
    </div>
    </Router>
  )
}

export default App

