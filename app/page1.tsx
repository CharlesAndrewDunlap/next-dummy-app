// const { trace }  = require("@opentelemetry/api");
// const { BasicTracerProvider,SimpleSpanProcessor }  = require("@opentelemetry/sdk-trace-base");
// const { OTLPTraceExporter } =  require('@opentelemetry/exporter-trace-otlp-http');

// const collectorOptions = {
//   url: 'http://localhost:9999/otel', 
// };

// const provider = new BasicTracerProvider();
// const exporter = new OTLPTraceExporter(collectorOptions);

// provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
// trace.setGlobalTracerProvider(provider);
// provider.register();

export default async function CatPage() {

  const userData = await fetch('https://cat-fact.herokuapp.com/facts', {
    cache: 'no-store',
  });
  const parsedData = await userData.json();

  

  return (
    <div className="content">
      <div>{parsedData[0].text}</div>
    </div>
  );


}