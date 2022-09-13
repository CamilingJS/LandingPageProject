import ServiceBlock from "./ServiceBlock";

const SERVICE_BLOCK_DATA = [
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-1.png',
    text: 'Web Design'
  },
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-2.png',
    text: 'ECommerce'
  }, 
  {
    imgURL: 'https://assets.codepen.io/6060109/agency-service-3.png',
    text: 'Automation'
  }
]

export default function ServicesSection() {  
  return (
    <div className="servicesSection">
      <h1>OUR SERVICES</h1>
      <div class="servicesContainer">
        {
          SERVICE_BLOCK_DATA.map(block => {
            return(
              <ServiceBlock block={block}/>
            )
          })
        }
    
    </div>
    </div>
  );
}
