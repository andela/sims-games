// Get the files by the id set on the url
export const getJSONData = (valueId) => {
  let dataFileUrl = '';
  switch (valueId) {
    case 1:
      dataFileUrl = "/data/kickoff-call.json";
      break;
    case 2:
      dataFileUrl = "/data/product-owner.json";
      break;
    case 3:
      dataFileUrl = "/data/chief-technical-officer.json";
      break;
    case 4:
      dataFileUrl = "/data/team-performing.json";
      break;
    case 5:
      dataFileUrl = "/data/team-storming.json";
      break;
    case 6:
      dataFileUrl = "/data/technical-team-lead.json";
      break;
  };
  $.getJSON(dataFileUrl, (json) => {
    console.log(json);
    return json;
  });
};