import React from "react";
import './download_font.style.css';

const DownloadFont: React.FC = () => {

    return (
        <div className="flex flex-col">
            <a href="static/iconfont/iconmoon.ttf" download className="no-underline mt-4 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="icon-file-download text-center"/>
                <span className="ml-4 mr-4">iconmoon.ttf</span>
            </a>
            <a download className="no-underline  mt-4 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="icon-file-download text-center"/>
                <span className="ml-4 mr-4">iconmoon.woff</span>
            </a>
            <a download className="mt-4 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="icon-file-download text-center"/>
                <span className="ml-4 mr-4">iconmoon.eot</span>
            </a>
            <a download className="mt-4 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="icon-file-download text-center"/>
                <span className="ml-4 mr-4">font-style.css</span>
            </a>
            <a download className="mt-4 font-bold py-2 px-4 rounded inline-flex items-center">
                <span className="icon-file-download text-center"/>
                <span className="ml-4 mr-4">selection.json</span>
            </a>
        </div>
    )
}

export default DownloadFont;