import CatPage from './page1';

const { trace }  = require("@opentelemetry/api");
const { BasicTracerProvider,SimpleSpanProcessor }  = require("@opentelemetry/sdk-trace-base");
const { OTLPTraceExporter } =  require('@opentelemetry/exporter-trace-otlp-http');

const collectorOptions = {
  url: 'http://localhost:9999/otel', 
};

const provider = new BasicTracerProvider();
const exporter = new OTLPTraceExporter(collectorOptions);


provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
trace.setGlobalTracerProvider(provider);
provider.register();

export default async function Home() {

  const userData = await fetch('https://random-data-api.com/api/v2/users', {
    cache: 'no-store',
  });
  const parsedData = await userData.json();

  const randomUser = await fetch('https://randomuser.me/api/', {
    cache: 'no-store',
  });
  const randomUserData = await randomUser.json();


  return (
    <div className="content">
      <div>{parsedData.first_name}</div>
      <div>{randomUserData.results[0].gender}</div>
      <CatPage/>
    </div>
  );


}
