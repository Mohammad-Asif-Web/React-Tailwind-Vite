function Custom_js_css_add(){

    // JavaScript Syntax
    const todo = "Custom JS, CSS add";
    const date = new Date();
    const currentYear = date.getFullYear();
    const dateName = date.getDate();
    const monthName = date.getMonth();

    // CSS Properties
    let todoStyle = {
        fontSize : "25px",
        marginBottom : "15px",
        border: "1px solid #fff",
        borderRadius: "10px",
        padding: "10px 30px",
        background: "aqua",
        color: 'firebrick'
    }

    return (
        <>
        <h1 className="custom">This is Custom Style Sheets</h1>
        <h3 style={todoStyle}>{todo}</h3>
        <p>Today Date: {dateName}-0{monthName}-{currentYear}</p>

        <h3 className='text-3xl my-4'>Adding Inline CSS</h3>
        <p style={{color: "green", fontSize: "30px", marginBottom: "20px"}}>This is Bottom Text</p>
          
        </>
      )

}

export default Custom_js_css_add;
