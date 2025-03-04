
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-8">
            <div className="flex justify-center space-x-4 mb-4">
                <a target="_blank" href="https://www.facebook.com/abdul.zabbar.04/" className="btn btn-outline text-white btn-sm btn-square">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.linkedin.com/in/md-abdul-zabbar-eee/" target="_blank" className="btn btn-outline text-white btn-sm btn-square">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/abdul-zabbar04" target="_blank" className="btn btn-outline text-white btn-sm btn-square">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://x.com/zabbar365" target="_blank" className="btn btn-outline text-white btn-sm btn-square">
                    <i className="fas fa-times"></i>
                </a>
                {/* <a href="#" target="_blank" className="btn btn-outline text-white btn-sm btn-square">
                    <i className="fab fa-discord"></i>
                </a>
                <a href="#" target="_blank" className="btn btn-outline text-white btn-sm btn-square">
                    <i className="fab fa-instagram"></i>
                </a> */}
            </div>
            <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400">
                    &copy; 2025 Copyright: <span className="text-white font-semibold">Abdul Zabbar</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;