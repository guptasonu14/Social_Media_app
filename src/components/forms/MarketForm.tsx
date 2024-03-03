import * as z from "zod";
import { Models } from "appwrite";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";


import { MarketValidation } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";

import Loader from "../shared/Loader";
import { useCreateMarket, useUpdateMarket } from "@/lib/react-query/queries";

import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import FileUploader from "../shared/FileUploader";
import { Textarea } from "../ui";




type MarketFormProps = {
   
    post?: Models.Document;
    action: "Create" | "Update";
  };
  
  const MarketForm = ({ post, action }: MarketFormProps) => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const { user } = useUserContext();
  
    const form = useForm<z.infer<typeof MarketValidation>>({
      resolver: zodResolver(MarketValidation),
      defaultValues: {
        caption: post ? post?.caption : "",
        file: [],
        price: post ? post?.price : "",
      },
    });
  
    const { mutateAsync: createMarket, isLoading: isLoadingCreate } = useCreateMarket();
    const { mutateAsync: updateMarket, isLoading: isLoadingUpdate } = useUpdateMarket();
  
    const handleSubmit = async (value: z.infer<typeof MarketValidation>) => {
      // ACTION = UPDATE
      if (post && action === "Update") {
        try {
          const updatedMarket = await updateMarket({
            ...value,
            postId: post.$id,
            imageId: post.imageId,
            imageUrl: post.imageUrl,
            price: "",
          });
  
          if (!updatedMarket) {
            toast({
              title: `${action} post failed. Please try again.`,
            });
          } else {
            navigate(`/posts/${post.$id}`);
          }
        } catch (error) {
          console.error("Error updating market:", error);
          toast({
            title: `${action} post failed. Please try again.`,
          });
        }
      }
  
      // ACTION = CREATE
      const newPost = await createMarket({
          ...value,
          userId: user.id,
          price: "",
          caption: "",
         
      });
  
      if (!newPost) {
        toast({
          title: `${action} post failed. Please try again.`,
        });
      }
      navigate("/Market");
    };
  
    return (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-9 w-full  max-w-5xl">
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Caption</FormLabel>
                  <FormControl>
                    <Textarea
                      className="shad-textarea custom-scrollbar"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="shad-form_label">Add Photos</FormLabel>
                  <FormControl>
                    <FileUploader
                      fieldChange={field.onChange}
                      mediaUrl={post?.imageUrl}
                    />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />

<FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Price</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

    
           <div className="flex gap-4 items-center justify-end">
              <Button
                type="button"
                className="shad-button_dark_4"
                onClick={() => navigate(-1)}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="shad-button_primary whitespace-nowrap"
                disabled={isLoadingCreate || isLoadingUpdate}>
                {(isLoadingCreate || isLoadingUpdate) && <Loader />}
                {action} Post
              </Button>
            </div>
          </form>
        </Form>
      );
  };
  
  export default MarketForm;
  