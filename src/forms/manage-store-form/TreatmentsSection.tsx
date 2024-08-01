import {
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form";
  import { treatmentList } from "@/config/store-options-config";
  import { useFormContext } from "react-hook-form";
  import TreatmentCheckbox from "./TreatmentCheckbox";
  
  const TreatmentsSection = () => {
    const { control } = useFormContext();
  
    return (
      <div className="space-y-2">
        <div>
          <h2 className="text-2xl font-bold">Treatments</h2>
          <FormDescription>
            Choose the treatments offered by your store
          </FormDescription>
        </div>
        <FormField
          control={control}
          name="treatments"
          render={({ field }) => (
            <FormItem>
              <div className="grid md:grid-cols-5 gap-1">
                {treatmentList.map((treatmentItem) => (
                  <TreatmentCheckbox treatment={treatmentItem} field={field} />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  
  export default TreatmentsSection;