import styles from "./WishesSection.module.css"
import {CenterContainer} from "../UI/container/CenterContainer.jsx";
import {BlurContainer} from "../UI/container/BlurContainer.jsx";
import {TypeAnimation} from "react-type-animation";
import {useState} from "react";
import SplitText from "../UI/text/SplitText.jsx";
import RotatingText from "../UI/text/RotatingText.jsx";

const WORDS = [
    "красивая", "умная", "милая", "очаровательная", "незабываемая", "яркая", "привлекательная",
    "весёлая", "симпатичная", "интересная", "лучшая", "понимающая", "любимая",
    "самая-самая"
]

export const WishesSection = () => {
    const [leftPartInView, setLeftPartInView] = useState(false);
    const [rightPartInView, setRightPartInView] = useState(false);

    const onLeftPartEnterViewportHandler = () => {
        setLeftPartInView(true);
    }

    const onLeftPartLeaveViewportHandler = () => {
        setLeftPartInView(false);
    }

    const onRightPartEnterViewportHandler = () => {
        setRightPartInView(true);
    }

    const onRightPartLeaveViewportHandler = () => {
        setRightPartInView(false);
    }

    return <section className={styles.wishes} id="wishes">
        <CenterContainer>
            <div className={styles['wishes__inner']}>
                <div className={styles['wishes__part-container']} id="letter">
                    <BlurContainer
                        onEnterViewport={onLeftPartEnterViewportHandler}
                        onLeaveViewport={onLeftPartLeaveViewportHandler}
                    >
                        {
                            leftPartInView &&
                            <div className={styles['wishes__left']}>
                                <SplitText
                                    text="Письмо для тебя"
                                    className="title"
                                />
                                <div className={styles['wishes__letter-container']}>
                                    <TypeAnimation
                                        sequence={[
                                            "Настя, поздравляю тебя с этим чудестным праздником весны. \nЯ очень рад, что в моей жизни есть такая замечательная",
                                            500,
                                            "Настя, поздравляю тебя с этим чудестным праздником весны. \nЯ очень рад, что в моей жизни есть такая прекрасная",
                                            500,
                                            "Настя, поздравляю тебя с этим чудестным праздником весны. \nЯ очень рад, что в моей жизни есть такая очаровательная девушка как ты и я с уверенностью могу сказать, что чудеса случаються, ведь однажды я познакомился именно с тобой.\nЖелаю тебе всегда оставаться на позитиве, никогда не унывать и продолжать показывать миру что такое истинная красота)))\nИзвини меня за то, что иногда тебе надоедаю, мне просто очень сильно нравиться с тобой общаться и я ничего не могу с этим поделать)",
                                        ]}
                                        className={styles['wishes__letter-text']}
                                    />
                                </div>
                            </div>
                        }
                    </BlurContainer>
                </div>
                <div className={styles['wishes__part-container']} id="reminder">
                    <BlurContainer
                        onEnterViewport={onRightPartEnterViewportHandler}
                        onLeaveViewport={onRightPartLeaveViewportHandler}
                    >
                        {
                            rightPartInView &&
                            <div className={styles['wishes__right']}>
                                <SplitText
                                    text="Всегда помни, что ты самая"
                                    className="title"
                                    textAlign="center"
                                />
                                <RotatingText
                                    texts={WORDS}
                                    mainClassName={styles["rotating-text"]}
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                            </div>
                        }
                    </BlurContainer>
                </div>
            </div>
        </CenterContainer>
    </section>
}