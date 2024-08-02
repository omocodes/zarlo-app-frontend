import { treatmentList } from "@/config/store-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (treatments: string[]) => void;
  selectedTreatments: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const TreatmentFilter = ({
  onChange,
  selectedTreatments,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleTreatmentsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedTreatment = event.target.value;
    const isChecked = event.target.checked;

    const newTreatmentsList = isChecked
      ? [...selectedTreatments, clickedTreatment]
      : selectedTreatments.filter((treatment) => treatment !== clickedTreatment);

    onChange(newTreatmentsList);
  };

  const handleTreatmentsReset = () => onChange([]);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By Treatment</div>
        <div
          onClick={handleTreatmentsReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {treatmentList
          .slice(0, isExpanded ? treatmentList.length : 7)
          .map((treatment) => {
            const isSelected = selectedTreatments.includes(treatment);
            return (
              <div className="flex">
                <input
                  id={`treatment_${treatment}`}
                  type="checkbox"
                  className="hidden"
                  value={treatment}
                  checked={isSelected}
                  onChange={handleTreatmentsChange}
                />
                <Label
                  htmlFor={`treatment_${treatment}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {treatment}
                </Label>
              </div>
            );
          })}

        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default TreatmentFilter;