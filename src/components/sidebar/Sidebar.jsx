import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">DionTheDev</span>
                </Link>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                        <li>
                            <AccountCircleIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                        <li>
                            <StoreIcon className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <span>Notifcations</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <MonitorHeartIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <TextSnippetIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AssignmentIndIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div> 
            </div>
        </div>
    );
};

export default Sidebar;