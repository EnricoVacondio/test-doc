import clsx from "clsx";
import React from "react";
import '/static/iconfont/style.css';
import './fontview.style.css';
import icons from './fontnames';

const FontView: React.FC = () => {
    const [iconList, setIconList] = React.useState(icons);

    const filterList = (text: string) => {
        if(!text){
            setIconList(icons);
            return;
        }
        setIconList(iconList.filter(it => it.includes(text)));
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="mb-8 mt-8 w-full">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4 pl-4 pr-4">
                        <input 
                            type="search"
                            className="form-control
                                relative flex-auto
                                min-w-0 block
                                w-full 
                                px-3
                                py-1.5 
                                text-base
                                font-normal
                                text-white
                                bg-clip-padding
                                border border-solid
                                border-gray-300 rounded 
                                transition ease-in-out m-0 
                                focus:text-white-700 
                                border-2
                                focus:bg-primary
                                focus:outline-none"
                            placeholder="Search" 
                            aria-label="Search"
                            onChange={(evt) => {
                                filterList(evt.target.value)
                            }}
                            style={{height: 50}}
                            aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 place-items-center">
                {iconList.map((it) => (
                    <div className="wrapper mt-2 mb-2">
                        <span className={clsx(`${it} icon-primary`)}></span>
                        <span className="mls">{it}</span>
                     </div>
                ))}
             </div>
      </div>
    )
}

export default FontView;