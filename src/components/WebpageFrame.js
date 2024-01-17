
export default function WebpageFrame({ url }) {
    return (
    <iframe 
        src={url} 
        width="800" 
        height="600" 
        style={{ border: 'none' }} 
        title="Dynamic Webpage"
        ></iframe>
    );
  }
  