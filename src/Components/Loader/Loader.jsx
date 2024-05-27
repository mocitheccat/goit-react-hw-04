import { Oval } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="loader-container">
            <Oval
                color="#fff"
                secondaryColor="#808080"
                height={60}
                width={60}
            />
        </div>
    );
};

export default Loader;
