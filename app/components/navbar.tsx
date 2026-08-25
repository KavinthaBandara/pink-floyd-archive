

const Navbara = () => {
  return (
    <nav className="flex items-center justify-center gap-4 dark:bg-gray-1000 p-4 rounded-lg shadow-md">

        <a href="/albums" >
        Albums
        </a>
        <a href="/members" >
        Members
        </a>
        <a href="/timeline" >
        Timeline
        </a>
         <a href="/chat" >
        Chat
        </a>

    </nav>
    );  
};

export default Navbara;