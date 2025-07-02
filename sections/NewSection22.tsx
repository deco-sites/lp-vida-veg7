export default function HubSpotForm() {
  return (
    <div className="form-container">
      <script
        charset="utf-8"
        type="text/javascript"
        src="//js.hsforms.net/forms/embed/v2.js"
      ></script>
      <script>
        hbspt.forms.create({
          region: "na1", // Substitua pela sua região
          portalId: "48134768", // Substitua pelo ID do seu portal
          formId: "80f63854-f85a-4f81-9384-bc524c30d987" // Substitua pelo ID do formulário
        });
      </script>
    </div>
  );
}