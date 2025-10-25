import ComponentA from '../tree/ComponentA'
import ComponentC from '../tree/ComponentC';

function RootComponent() {
  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}

export default RootComponent;
