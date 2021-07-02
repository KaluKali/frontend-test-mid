import React, {useState} from "react";
import PrimaryButton from "../../PrimaryButton";
import VideoModal from "../../VideoModal";
import Block from "../../Block";
import './videoourstory.scss'
import backgroundImg from '../../../images/3-over.png'

export default function VideoOurStory() {
    const [videoModal,setVideoModal] = useState(false);

    const onClickPlay = () => {
        setVideoModal(true)
    }

    const onClosePlay = () => {
        setVideoModal(false)
    }

    return (
        <>
            <Block withOverlay className={'video-wrap-container'} url={backgroundImg}>
                <PrimaryButton onClick={onClickPlay} figure={'circle'}>
                    <div className={'icon-play'}/>
                </PrimaryButton>
                <h3 className={'bottom-text'}>watch our story</h3>
            </Block>
            <VideoModal open={videoModal} onClose={onClosePlay} />
        </>
    )
}
