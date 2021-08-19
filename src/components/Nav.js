import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
const Nav = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer)
    return (
        <div class="ui secondary  menu">
  <a class="active item">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Friends
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui icon input">
        <input type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>
      <Link to="/cart">
                            <div className="basket">
                                <BsFillBagFill className="cart-icon" />
                                <span>{totalQuantities}</span>
                            </div>
                        </Link>
    </div>
    <a class="ui item">
      Logout
    </a>
  </div>
</div>
    )
}

export default Nav
