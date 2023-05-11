import React, { Fragment, useState } from 'react'
import { Modal,Button, Nav } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FiLogOut,FiHome,FiDownloadCloud, FiUploadCloud } from 'react-icons/fi';
import { GrDocumentTransfer, } from 'react-icons/gr';
import { RiLuggageDepositFill, } from 'react-icons/ri';
import { IoDocumentTextOutline, } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/bank/bankReducer';
const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [logout, setLogout] = useState(false)
    const navlinks = [
        { to: '/home', label: "Home", icon: <FiHome /> },
        { to: '/withdraw', label: "Withdraw", icon: <FiDownloadCloud /> },
        { to: '/deposit', label: "Deposit", icon: <RiLuggageDepositFill /> },
        { to: '/transfer', label: "Transfer", icon: <GrDocumentTransfer /> },
        { to: '/statement', label: "Statement", icon: <IoDocumentTextOutline /> },

    ]

    const active = {
        color: '#89CEEB',
        textDecoration: 'underline'
    };
    const notActive = {
        color: 'black',
        textDecoration: "none"
    };
    const logoutUser = () => {
        dispatch(userLogout());
        navigate('/')
    }
    return (
        <React.Fragment>
            <h1 className='text-center mt-5'>ABC BANK</h1>
            <div className=" d-flex justify-content-center mt-5">
                {navlinks.map((item) => (
                    <Fragment key={item.to}>
                        <Link to={item.to} onClick={() => setLogout(false)} className='d-flex align-items-center mx-2' style={location.pathname === item.to && !logout ? active : notActive}>

                            {item.icon}
                            <span>{item.label}</span>

                        </Link>
                    </Fragment>
                ))}
                <Fragment >
                    <div className='d-flex align-items-center mx-2' onClick={() => setLogout(true)} style={logout ? active : notActive}>
                        <FiLogOut />

                        <span>Logout</span>

                    </div>
                </Fragment>
            </div>
            <Modal show={logout} onHide={() => setLogout(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to leave now?</Modal.Body>
                <Modal.Footer>
                    <Button style={{
                    backgroundColor:'#3ca651',
                    }} onClick={() => setLogout(false)}>
                        Close
                    </Button>
                    <Button style={{
                        backgroundColor: 'red',
                    }} onClick={() => logoutUser()}>
                        Logout
                    </Button>
                </Modal.Footer>
            </Modal>

        </React.Fragment>
    )
}

export default Header