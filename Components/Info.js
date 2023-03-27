import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="../Images/mojitha.jpg" />
            <h1 className="info-name">Mojitha</h1>
            <h3 className="info-title">Lazy Developer</h3>
            <h4 className="info-website">test.website</h4>

            <div className="info-buttons">
                <button>
                    <img src="../Images/icon.png" className="info-buttons-icon" />
                    Email
        </button>

                <button className="info-buttons-linkedin">
                    <img src="../Images/vector.png" className="info-buttons-linkedin-icon" />
                    LinkedIn
        </button>
            </div>
        </div>
    )
}