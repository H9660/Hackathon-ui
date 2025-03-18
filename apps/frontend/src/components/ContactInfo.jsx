export default function ContactInfo() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-5">
      <h2 className="text-lg font-bold mb-4 ml-2">Contact Information</h2>

      <div className="grid grid-cols-2 gap-y-3 ml-2">
        <p className="text-gray-500">Email</p>
        <p className="text-black">rakeshraushan@gmail.com</p>

        <p className="text-gray-500">Phone</p>
        <p className="text-black">+91 9922004866</p>
      </div>
    </div>
  );
}
