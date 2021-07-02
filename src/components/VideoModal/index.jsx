import React from "react";
import {Modal} from "react-bootstrap";
import PrimaryButton from "../PrimaryButton";
import {IoClose} from "@react-icons/all-files/io5/IoClose";
import {useWindowSize} from "../../hooks/useWindowSize";

export default function VideoModal({open,onClose}) {
    const size = useWindowSize();

    return (
        <Modal show={open} onHide={onClose} centered>
            <Modal.Header closeLabel={'close-video'}>
                <Modal.Title>Video</Modal.Title>
                <PrimaryButton onClick={onClose} label={'close-video'}><IoClose/></PrimaryButton>
            </Modal.Header>
            <Modal.Body>
                <iframe width={'100%'} height={size.height/2} src="https://www.youtube.com/embed/KvUgaHTNit4"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
            </Modal.Body>
        </Modal>
    )
}
