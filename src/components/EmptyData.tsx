const EmptyData = ({ text = "No data available." }) => {
  return (
    <div className="flex justify-center">
      <span className="text-lg font-semibold text-gray-300">{text}</span>
    </div>
  );
};

export default EmptyData;
