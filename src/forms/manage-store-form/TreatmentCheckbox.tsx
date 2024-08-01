import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  treatment: string;
  field: ControllerRenderProps<FieldValues, "treatments">;
};

const TreatmentCheckbox = ({ treatment, field }: Props) => {
  return (
    <FormItem className="flex flex-row items-center space-x-1 space-y-0 mt-2">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(treatment)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, treatment]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== treatment)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{treatment}</FormLabel>
    </FormItem>
  );
};

export default TreatmentCheckbox;