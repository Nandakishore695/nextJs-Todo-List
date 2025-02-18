export default function ToDoData({newListData,deleteHandle,editHandle,editTrue,cancle,editId,saveEditHandle}) {
    return (
        <>
        {newListData?.map((item, index)=>(
                <ul key={index} className="list-none">
                    <li>
                        {item.task}
                        {editTrue && editId === item.id ?
                        <>
                        <button onClick={saveEditHandle}>Save</button> 
                        <button onClick={cancle}>Cancle</button>
                        </>
                        : 
                        <>
                        <button onClick={()=>editHandle(item.id)}>Edit</button>
                        <button onClick={()=>deleteHandle(item.id)}>Delete</button></>}
                    </li>
                </ul>
        ))}
        </>
);
}