(await import("dotenv")).config();
const { string: t } = await import("zod");
var a = (await import("zod")).object({
	User: t().optional().default(""),
	Base: t()
		.optional()
		.default((await import("process")).cwd()),
	Token: t().optional().default(""),
});
export { a as default, t as string };
