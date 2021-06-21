import React from 'react';

export default function Title({name, title}){
    return(
        <div className="row">
            <div className="align-items-center col-10 mx-auto my-2 text-center text-title align">
                <h1 className="text-capitalize font-weight-bold text-center">
                    {name}
                    <strong className="text-blue ">
                        {title}
                    </strong>
                </h1>
            </div>
        </div>
    );
}