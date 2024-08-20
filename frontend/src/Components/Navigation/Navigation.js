import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'

const Navigation = () => {
    const NavStyled = styled.nav``
    return (
        <NavStyled>
            <div className="user-icon">
                <img src={avatar} alt='avatar'/>
                <p className="text">
                    <h2>Joselyne</h2>
                    <p>Your money</p>
                </p>
            </div>
            

        </NavStyled>
    )
}

export default Navigation
