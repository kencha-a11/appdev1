import { getImageUrl } from "../utils/utils";
import Card from "./Card";
import Avatar from "./Avatar";


function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>

  );
}

export default Profile