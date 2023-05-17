// Props and Destructuring

function Props(props){
    const {nameText, homeText} = props;
    return (
        <>
            <div className="">
                <small>Name: {nameText} Home:{homeText}</small>
            </div>
        </>
    )
}
export default Props;