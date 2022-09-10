const ContactsModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} onClick={handleClose}>
            <section className="modal-main" onClick={event => event.stopPropagation()}>
                <div className='modal-main-header'>
                    <p className='modal-main-header-text'>مخاطبین</p>
                    <button onClick={handleClose} className='modal-main-close-button'>بستن</button>
                </div>
                <div className='modal-main-body'>
                    {children}
                </div>
            </section>
        </div>
    );
};
export default ContactsModal

