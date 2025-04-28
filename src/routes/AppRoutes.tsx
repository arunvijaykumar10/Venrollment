import { Routes, Route } from "react-router-dom";
import AuthPages from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import SettingsPage from "../pages/Settings";
import AssetManager from "../pages/AssetManager";
import VideoEditorWorkspace from "../pages/VideoEditor";
import ExportModal from "../pages/ExportModal";
import BrandKit from "../pages/BrandKit";
import VideoPlayer from "../pages/VideoPlayer";
import RBACManagement from "../pages/RBACWireframe";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPages />} />
      <Route path="/auth" element={<AuthPages />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/videoeditor" element={<VideoEditorWorkspace />} />
      <Route path="/assetmanager" element={<AssetManager />} />
      <Route path="/exportmodal" element={<ExportModal />} />
      <Route path="/brandkit" element={<BrandKit />} />
      <Route path="/videoplayer" element={<VideoPlayer />} />
      <Route path="/rbacmanagement" element={<RBACManagement/>} />
    </Routes>
  );
};

export default AppRoutes;
