const Header = (props) => { 


    const {spanColor} = props

    return ( 


        <div className="sticky left-0 rigth-0 top-0 w-full bg-white shadow-md rounded-lg  "> 

            <h1 
                className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Nuevo {' '}
                <span 
                    className={spanColor} >
                    Informe
                </span>
            </h1>

        </div>

    );
};

export default Header; 