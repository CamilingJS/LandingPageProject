export default function ServiceBlock (props) {
    return (
        <>
          <div class="sericeBlockContainer" >
            <img class="serviceImg" src={props.block.imgURL} />
            <h3>{props.block.text}</h3>
          </div>
        </>
    )
}