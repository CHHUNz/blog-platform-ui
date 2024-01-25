import "../../../app/globals.css"
import React, {useState, useRef} from "react";
import {any} from "prop-types";
import navbar from "@/components/layout/Navbar";

const DragDropImageUpload = () => {
    const [images, setImages] = useState([])
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);
    const selectFile = () => {
        // @ts-ignore
        fileInputRef.current.click()
    }
    const onFileSelect = (event: any) => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            if (!images.some((e: any) => e.name === files[i].name)) {
                // @ts-ignore
                setImages((prevImages: any) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    };
    const deleteImage = (index: any) => {
        setImages((prevImages) =>
            prevImages.filter((_, i ) => i !== index)
        );
    }
    return (
        <>
            <div className="card">
                <div className="top">
                    <p> Drag & Drop image uploading </p>
                </div>
                <div className="drag-area">
                    {
                        isDragging ? (
                            <span className="select"> Drop image here </span>
                        ) : (
                            <>
                                Drag & Dop image here or {" "}
                                <span className="select" role="button" onClick={selectFile}>
                                    Browse
                                </span>
                            </>
                        )
                    }
                    <input name="file" type="file" className="file" multiple ref={fileInputRef}
                           onChange={onFileSelect}/>
                </div>
                <div className="container">
                    {
                        images.map((images: any, index: any) => (
                            <>
                                <div className="image" key={index}>
                                <span className="delete" onClick={() => deleteImage(index)}>
                                    &times;
                                </span>
                                    <img src={images.url} alt={images.name}/>
                                </div>

                            </>
                        ))
                    }

                </div>
                {/*<button type="button">*/}
                {/*    Uploading*/}
                {/*</button>*/}
            </div>
        </>
    )
}
export default DragDropImageUpload