import VedioCard from './VedioCard';
function GridCards() {
  const videoCards = [
    {
      image: '/thumnail.jpg',
      thumnail: '/chan.jpg',
      title:
        'NBK109 - Nandamuri Balakrishna Birthday Glimpse | Bobby Kolli | Thaman S | S Naga Vamsi',
      channel: 'jai bhalaya',
      views: '7.3B',
      uploadedon: '2 days ago',
    },
    {
      image: '/thumnail.jpg',
      thumnail: '/chan.jpg',
      title: 'Another Video Title | Another Creator | Music | Some Label',
      channel: 'another channel',
      views: '1.2M',
      uploadedon: '1 week ago',
    },
    {
      image: '/thumnail.jpg',
      thumnail: '/chan.jpg',
      title:
        'Yet Another Video Title | Some Other Creator | Another Music | Another Label',
      channel: 'yet another channel',
      views: '500K',
      uploadedon: '3 days ago',
    },
    {
      image: '/thumnail.jpg',
      thumnail: '/chan4jpg',
      title: 'Amazing Video | Creator Name | Genre | Label',
      channel: 'amazing channel',
      views: '2.5M',
      uploadedon: '5 days ago',
    },
    {
      image: '/thumnail.jpg',
      thumnail: '/chan.jpg',
      title: 'Interesting Video | Another Creator | Genre | Another Label',
      channel: 'interesting channel',
      views: '3.1M',
      uploadedon: '1 day ago',
    },
  ];
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2'>
      {videoCards.map((card) => (
        <VedioCard
          image={card.image}
          thumnail={card.thumnail}
          title={card.title}
          channel={card.channel}
          views={card.views}
          uploadedon={card.uploadedon}
        ></VedioCard>
      ))}
    </div>
  );
}
export default GridCards;
