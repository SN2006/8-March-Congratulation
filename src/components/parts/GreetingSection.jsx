import styles from "./GreetingSection.module.css"
import {CenterContainer} from "../UI/container/CenterContainer.jsx";
import {motion} from "framer-motion";
import {BlurContainer} from "../UI/container/BlurContainer.jsx";
import {useState} from "react";
import SplitText from "../UI/text/SplitText.jsx";


export const GreetingSection = () => {
    const [inView, setInView] = useState(false);
    const [isHeaderShown, setIsHeaderShown] = useState(false);

    const onEnterViewportHandler = () => {
        setInView(true);
    }

    const onLeaveViewportHandler = () => {
        setInView(false);
        setIsHeaderShown(false);
    }

    return <section className={styles.greeting} id="greeting">
        <CenterContainer>
            <div
                className={styles['greeting-inner']}
            >
                <BlurContainer
                    onEnterViewport={onEnterViewportHandler}
                    onLeaveViewport={onLeaveViewportHandler}
                >
                    {inView && <motion.div
                        viewport={{
                            amount: "all"
                        }}
                        className={styles['greeting__content']}
                    >
                        <SplitText
                            text="Привет, Настя)"
                            className="title"
                            onLetterAnimationComplete={() => setIsHeaderShown(true)}
                        />
                        <SplitText
                            delay={50}
                            text="Хочу поздравить тебя с 8 Марта и предлогаю тебе посмотреть интересное поздравление)))"
                            className="text"
                        />
                        <SplitText
                            delay={50}
                            text="⬇️ Листай ⬇️"
                            className="text"
                        />
                    </motion.div>}
                </BlurContainer>
            </div>
        </CenterContainer>
    </section>
}