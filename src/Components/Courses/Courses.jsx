
const Courses = ({course , handleCourse}) => {
    // console.log(course.id);
    const {photo ,name,description,price,credit} = course
    return (
        <div >
            <div className='shadow-lg container mx-auto p-6 rounded-lg space-y-4 '>
                <img className='w-full' src={photo} alt="" />
                <div className="p-2 space-y-4">
                    <h3 className="text-xl h-12 font-semibold text-black ">{name}</h3>
                    <p className="">{description}</p>
                    <div className='flex justify-between'>
                    <div className='flex'>
                        <h3 className='text-xl text-black'>$</h3>
                        <p className='text-lg flex ml-1 font-medium'>Price:<span> {price}</span></p>
                    </div>
                    <div className='flex'>
                        <img className='lg:h-8' src="../public/Frame (5).png" alt="" />
                        <p className='flex ml-2 text-xl '>Credit: <span className='ml-1'>{credit} </span> hr</p>
                    </div>  
                </div>
                <button onClick={()=>handleCourse(course)} className=" btn btn-primary w-full text-lg font-bold">Select</button>
            </div>

        </div>           
        </div>
    );
};

export default Courses;