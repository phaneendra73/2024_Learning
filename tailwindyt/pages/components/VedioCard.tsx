function VedioCard(props: any) {
  return (
    <div className=' pl-6'>
      <div>
        <img src={props.image} className=' rounded-lg'></img>
      </div>
      <div className='pt-5 grid-col-12 flex'>
        <img
          src={props.thumnail}
          className={' col-span-4 w-20 h-20 rounded-full'}
        ></img>
        <div className='col-span-3 pl-7'>
          <div>{props.title}</div>
          <div className=' text-gray-400'>{props.channel}</div>
          <div className=' text-gray-400'>
            {props.views} | {props.uploadedon}
          </div>
        </div>
      </div>
    </div>
  );
}
export default VedioCard;
