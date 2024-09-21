import './DropBoxcard.css';


function DropBox(){

    return(
    <>
        <div id = "dropBox">
            <div id = "border">
                <div id ="textBox">
                    <p className = "text"> 
                        Drop Your Image 
                    </p>
                </div>
            </div>

        </div>
        <button  id = "submit" onClick> Submit   </button>
    </>
    );
}
export default DropBox;


