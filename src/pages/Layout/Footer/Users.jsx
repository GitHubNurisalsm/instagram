import React from 'react';
import avatarka from "../../../assets/photo_2024-05-07 17.22.25.jpeg"
import "../../../styles/users.scss"

const Users = () => {
    return (
        <section className={"users"}>
            <div className="users__user">
                <img src={avatarka} alt="" className="users__user-img"/>
                <div className="users__user-desc">
                    <h3 className="users__user-name">
                        n6.2209
                    </h3>
                    <p className="users__user-nik">
                        F4
                    </p>
                </div>
                <button className="subscribe">
                    Подписаться
                </button>
            </div>
        </section>
    );
};

export default Users;