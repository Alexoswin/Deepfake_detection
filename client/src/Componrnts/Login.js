import './Login.css'
function Login(){

    return(
    <div id = "box">
       <div id = "Login">
            <div id = "content">
                <p id= "tag"> Login in </p>
                <br/>
                 
               
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
                </svg> <input type="text" className="txt" placeholder="example@gmail.com" />
                
               
                </div>
                <br/>
                

                <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>      <input type="password" className="txt" placeholder="Password" />
                </  div>

            </div>
        <div id = "img">
            <img  id="imglog" src="https://img.freepik.com/free-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg" />
        
        </div>
       </div>

    </div>
    );
}
export default Login;