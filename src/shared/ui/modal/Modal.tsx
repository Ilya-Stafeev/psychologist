import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import './Modal.scss';

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
    return (        
        <motion.div
            className="modal__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, transition: { delay: 0.1 } }}                   
            onClick={onClose}
        >
            <motion.div
                className="modal__content"
                initial={{ y: 100 }}
                animate={{ y: '0' }}
                exit={{ y: 100 }}              
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </motion.div>
            <button className="modal__btn" onClick={onClose}>
                <div className='modal__btn-block'>
                    <svg
                        className="modal__btn-img"
                        width="23px"
                        height="23px"
                        viewBox="0 0 23 23"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g stroke="none" strokeWidth="1">
                            <rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                            <rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect>
                        </g>
                    </svg>
                </div>
            </button>
        </motion.div>          
    );
};
