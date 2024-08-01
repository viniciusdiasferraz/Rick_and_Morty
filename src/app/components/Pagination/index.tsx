import React from "react";
import Image from "next/image";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination flex items-center justify-center space-x-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2  rounded-md disabled:opacity-50"
      >
        <Image
          alt="leftArrowIcon"
          src="/leftArrowIcon.svg"
          width={32}
          height={32}
        />
      </button>
      <span className="text-white text-lg">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2  rounded-md disabled:opacity-50"
      >
        <Image
          alt="rightArrowIcon"
          src="/rightArrowIcon.svg"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
};

export default Pagination;
