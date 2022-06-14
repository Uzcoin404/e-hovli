// Import React
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Import useContext => Localization
import { useContext } from 'react';
import { Context } from '../../Context/LangContext';

// Import Mui
import { IconButton, Button, Tooltip, Grow, Badge, MenuItem, } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



// Import Components
import logo from "../../Assets/Img/logo.svg"
import notificationIcon from "../../Assets/Img/notification.svg"
import loveIcon from "../../Assets/Img/love.svg"
import CurrencyIcon from "../../Assets/Img/currency.svg"
import locationIcon from "../../Assets/Img/location.svg"
import plusIcon from "../../Assets/Img/plus.svg"
import Container from "../Container/Container";
import Modal from '../ModalAuthorization/Modal';
import "../ModalAuthorization/Modal.scss";
import "../Header/Header.scss";
import Nav from '../Nav/Nav';
import content from '../../Localization/Content';

import "../../Utils/I18n";

const language = [
    {
        code: "uz",
        name: "Uzbekistan",
        country: "uz",
        values: "uz",
    },
    {
        code: "en",
        name: "English",
        country: "gb",
        values: "en",
    },
    {
        code: "ru",
        name: "Rossian",
        country: "ru",
        values: "ru",
    },
]

function Header() {

    const elModal = React.useRef();
    const elHeader = React.useRef();

    const { lang, setLang } = useContext(Context);

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    

    return (
        <>
            <header className="header" ref={elHeader}>
                <Container>
                    <div className="header__content">
                        <div className="header__logo">
                            <NavLink to={"/Afeme"} className="header__logo-link">
                                <img className="header__logo-img" src={logo} alt="logo" />
                            </NavLink>

                            <Tooltip className="icon__btn" title="Joylashuvingiz" arrow TransitionComponent={Grow}>
                                <Button className="btn header__location" variant="text" sx={{ py: 1, px: 1.2, ml: 1.5 }}>
                                    <img src={locationIcon} alt="location-img" className="header__location-img" />
                                    Uzbekistan
                                </Button>
                            </Tooltip>
                        </div>
                        <Nav elHeader={elHeader} />
                        <div className="header__items">
                            <div className="header__icons-nav">

                                    <IconButton color="primary">
                                        <Select
                                            className='header__select'
                                            value="lang"
                                            defaultValue={lang}
                                            onChange={(evt) => setLang(evt.target.value)}>
                                            <MenuItem value="uz">Uz</MenuItem>
                                            <MenuItem value="en">En</MenuItem>
                                            <MenuItem value="ru">Ru</MenuItem>
                                        </Select>
                                    </IconButton>

                                <Tooltip className="icon__btn" title="Your Loves" arrow TransitionComponent={Grow}>
                                    <IconButton color="primary">
                                        <img src={loveIcon} alt="" className="header__icon nav__love" />
                                    </IconButton>
                                </Tooltip>
                                <Badge badgeContent={100} color="secondary">
                                    <Tooltip className="icon__btn" title="Notifications" arrow TransitionComponent={Grow}>
                                        <IconButton color="success">
                                            <img src={notificationIcon} alt="" className="header__icon nav__notification" />
                                        </IconButton>
                                    </Tooltip>
                                </Badge>
                            </div>
                            <div className="header__buttons" sx={{ ml: 3 }}>
                                <NavLink to={"/advertPage"}>
                                    <Button className="btn header__button add__announcement" variant="contained" sx={{ py: 1, px: 1.5 }}><img src={plusIcon} alt="" />{content[lang].header.add}</Button>
                                </NavLink>
                                <Button className="btn header__button login__btn modal-dialog modal-dialog-scrollable"
                                    variant="text" sx={{ ml: 2, py: 1.5, px: 2.5 }} onClick={() => {
                                        elModal.current.classList.add("modal--open");
                                        elModal.current.classList.add("modal--style");
                                    }}>{content[lang].header.fromBtn}</Button>
                            </div>
                        </div>
                        <button className='header__menu-btn' onClick={() => {
                            elHeader.current.classList.add("header--open")
                        }}>/</button>
                    </div>
                </Container>
            </header>
            <Modal elModal={elModal} />
        </>
    )
}
export default Header

// class Header extends Component {
//     state = {
//         // IP: ""
//     }

    // componentDidMount() {
    //     axios.get(`https://ipapi.co/json/`)
    //         .then(response => {
    //             const IP = response.data;
    //             console.log(IP.country_name);
    //             if (IP.ip) {
    //                 this.setState({ IP });
    //             }
    //         })
    //         .catch((err) => { console.log(err); });
    // }

    // Iltomos errorlarni tozalab yuring
    // {this.state.IP.country_name}



    // render() {

    //     return (
    //         <>

    //         </>
    //     )
    // }
// }