import styles from "./BlurContainer.module.css"
import {motion} from "framer-motion";

const blurContainerVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
    }
}

export const BlurContainer = ({ children, onEnterViewport, onLeaveViewport }) => {
    return <motion.div
        className={styles.container}
        variants={blurContainerVariants}
        initial="initial"
        whileInView="animate"
        transition={{
            duration: 0.5
        }}
        onViewportEnter={onEnterViewport}
        onViewportLeave={onLeaveViewport}
    >
        {children}
    </motion.div>
}