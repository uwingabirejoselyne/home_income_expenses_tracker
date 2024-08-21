import React from 'react';
import styled from 'styled-components';
import avatar from '../../img/avatar.png';
import { menuItems } from '../../utils/menuItems';
import { money } from '../../utils/Icons';

const Navigation = () => {
    const NavStyled = styled.nav`
    padding:2rem 1.5rem;
    width:374px;
    height:100%;
    background:rgba(252, 246, 249,0.78);
    border:3px solid #ffffff;
    backdrop-filter:blur(4.5px);
    border-radius:32px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:2rem;

    .user-icon{
    height:100px;
    display:flex;
    align-items:center;
    gap:1rem;
    img{
    width:80px;
    height:80px;
    border-radius:50%;
    object-fit:cover;
    background:#fcf6f9;
    border:2px solid #ffffff;
    padding:.2rem;
    box-shadow:0px 1px 17px rgba(0,0,0,0.06)
    }
    h2{
    color:rgba(34,34,96,1)
    }
    p{
    color:rgba(34,34,96,.6)
    }
    }
    .menu-items{
    flex:1;
    display:flex;
    flex-direction:column;
    li{
    display:grid;
    grid-template-columns:40px auto;
    align-items:center;
    margin:.6rem 0;
    font-weight:500;
    cursor:pointer;
    transition:all .4s ease-in-out;
    color:rgba(34,34,96,.6);
    padding-left:1rem;
    position:relative;
    i{
    color:rgba(34,34,96,.6);
    font-size:1.4rem;
    transition:all .4s ease-in-out;
    }
    }
    }
    `;

    return (
        <NavStyled>
            <div className="user-icon">
                <img src={avatar} alt="avatar" />
                <div className="text">
                    <h2>Joselyne</h2>
                    <p>Your money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
                    );
                })}
            </ul>
            <div className="bottom-nav">
                {money} Signout
            </div>
        </NavStyled>
    );
};

export default Navigation;
